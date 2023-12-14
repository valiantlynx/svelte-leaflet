import os
from markdown_handler import MarkdownToHTMLConverter
from pocketbase import PocketBase
from pocketbase.client import FileUpload

# Define the input and output directories
input_dir = "md-content"  # Adjust this to your directory structure
output_dir = "html-content"  # Directory to save generated HTML files

# Create the output directory if it doesn't exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Initialize the Markdown to HTML converter
converter = MarkdownToHTMLConverter()

# Initialize PocketBase client with your server URL
client = PocketBase('https://animevariant.fly.dev')

# Authenticate as an admin or user (replace with your actual credentials)
admin_data = client.admins.auth_with_password("valiantlynxz@gmail.com", "pineapple123")


def handle_tags(client, tags, record_data):
    print(f"Tags: {tags}")
    
    # Loop through the list of tags
    for tag_name in tags:
        # change the tag name to lowercase and remove ' from the tag name
        tag_name = tag_name.lower().replace("'", "")
        
        # Check if the tag exists
        existing_tag = client.collection("valiantlynx_tags").get_list(1, 2, {"filter": f'name = "{tag_name}"'})
        
        print(f"Tag: {tag_name} | Existing Tag: {existing_tag}")
        
        if not existing_tag.items:
            # If the tag doesn't exist, create a new tag record
            tag_data = {
                "name": tag_name
            }
            result = client.collection("valiantlynx_tags").create(tag_data)
            print(f"Created tag: {tag_name}")   
        
        
        



# Loop through the directories in the input directory
for dirpath, dirnames, filenames in os.walk(input_dir):
    for dirname in dirnames:
        blog_slug = dirname
        blog_dir = os.path.join(input_dir, blog_slug)

        # Initialize an HTML file for this blog
        html_file = os.path.join(output_dir, f"{blog_slug}.html")

        # Initialize an empty Markdown content
        md_text = ""

        # Loop through Markdown files in the blog directory
        for root, _, files in os.walk(blog_dir):
            for filename in files:
                if filename.endswith(".md"):
                    file_path = os.path.join(root, filename)
                    with open(file_path, "r", encoding="utf-8") as file:
                        md_text += file.read()

        # Convert the combined Markdown content to HTML
        metadata, html_text = converter.markdown_to_html(md_text)

        # # Write the generated HTML content to the output HTML file
        # with open(html_file, "w", encoding="utf-8") as html_file:
        #     html_file.write(html_text)
        
        # Check if the record already exists in the "blogs" collection
        existing_record = client.collection("blogs").get_list(1, 2, {"filter": f'slug = "{blog_slug}"'})
        
        # Create a record in the PocketBase collection with the HTML content and metadata
        record_data = {
            "content": html_text,
            "slug": blog_slug,
            "tags": []
        }

        if "title" in metadata:
            record_data["title"] = metadata["title"]

        if "summary" in metadata:
            record_data["summary"] = metadata["summary"]

        if "created" in metadata:
            record_data["created"] = metadata["created"]

        if "updated" in metadata:
            record_data["updated"] = metadata["updated"]

        if "alt" in metadata:
            record_data["alt"] = metadata["alt"]

        if "tag" in metadata:
            record_data["tag"] = metadata["tags"]
        
        if "image" in metadata:
            record_data["image"] = FileUpload((os.path.join(blog_dir, 'image.png')), open(os.path.join(blog_dir, 'image.png'), 'rb'), 'image/png')
        
        # Handle tags
        if "tags" in metadata:
            handle_tags(client, metadata["tags"], record_data)
            
        if existing_record.items:
            # If the record exists, update it
            # client.collection("blogs").update(existing_record["_id"], record_data)
            # print(f"Updated record for slug: {blog_slug}")
            print(f"Record already exists for slug: {blog_slug}")
        else:
            # If the record does not exist, create it
            result = client.collection("blogs").create(record_data)
            print(f"Created record for slug: {blog_slug}")
