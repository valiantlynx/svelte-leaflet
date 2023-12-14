from typing import List
from dotenv import load_dotenv

load_dotenv()

from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema import BaseOutputParser

class CommaSeparatedListOutputParser(BaseOutputParser[List[str]]):
    """Parse the output of an LLM call to a comma-separated list."""


    def parse(self, text: str) -> List[str]:
        """Parse the output of an LLM call."""
        return text.strip().split(", ")

template = """You are a helpful assistant who generates comma separated lists.
A user will pass in a category, and you should generate 50 objects in that category in a comma separated list.
ONLY return a comma separated list, and nothing more."""
human_template = "{text}"

chat_prompt = ChatPromptTemplate.from_messages([
    ("system", template),
    ("human", human_template),
])
chain = chat_prompt | ChatOpenAI() | CommaSeparatedListOutputParser() # This | syntax is powered by the LangChain Expression Language (LCEL) and relies on the universal Runnable interface that all of these objects implement. To learn more about LCEL, read the documentation here(https://python.langchain.com/docs/expression_language).
res = chain.invoke({"text": "colors"})
print(res)

