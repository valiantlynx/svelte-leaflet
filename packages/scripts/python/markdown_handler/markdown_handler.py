import markdown
import re

class MarkdownToHTMLConverter:
    def __init__(self):
        pass

    def extract_metadata(self, md_text):
        metadata = {}
        # Regular expression to match metadata in the format "key: value" or "key: [value1, value2]"
        metadata_pattern = re.compile(r'^(\w+):\s+(.*)$', re.MULTILINE)
        metadata_matches = metadata_pattern.findall(md_text)

        for key, value in metadata_matches:
            # Check if the value is in a list format, e.g., ['value1', 'value2']
            if value.startswith("[") and value.endswith("]"):
                metadata[key] = [item.strip() for item in value[1:-1].split(",")]
            else:
                metadata[key] = value.strip()

        # Remove the metadata lines from the original text
        md_text = re.sub(metadata_pattern, "", md_text)
        
        return metadata, md_text

    def markdown_to_html(self, md_text):
        metadata, md_text = self.extract_metadata(md_text)

        # Convert Markdown to HTML
        html_text = markdown.markdown(md_text)

        return metadata, html_text
