from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

# llm = OpenAI()
# chat_model = ChatOpenAI()

from langchain.schema import HumanMessage
from langchain.prompts import PromptTemplate
from langchain.prompts.chat import ChatPromptTemplate
from langchain.schema import BaseOutputParser

# prompt = PromptTemplate.from_template("What is a good name for a company that makes {product}?")
# text = prompt.format(product="colorful socks")

# messages = [HumanMessage(content=text)]

# res_llm = llm.invoke(text)
# print(res_llm)
# # >> Feetful of Fun

# res_chat_model = chat_model.invoke(messages)
# print(res_chat_model)
# # >> AIMessage(content="Socks O'Color")

# template = "You are a helpful assistant that translates {input_language} to {output_language}."
# human_template = "{text}"

# chat_prompt = ChatPromptTemplate.from_messages([
#     ("system", template),
#     ("human", human_template),
# ])

# messages = chat_prompt.format_messages(input_language="English", output_language="French", text="I adore you.")
# res_chat_model = chat_model.invoke(messages)
# print(res_chat_model.content)

from langchain.schema import BaseOutputParser

class CommaSeparatedListOutputParser(BaseOutputParser):
    """Parse the output of an LLM call to a comma-separated list."""

    def parse(self, text: str):
        """Parse the output of an LLM call."""
        return text.strip().split(", ")

test_list = CommaSeparatedListOutputParser().parse("hi, bye, gay, gal")
print(test_list)