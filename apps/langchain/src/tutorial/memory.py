from operator import itemgetter

from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.schema.runnable import RunnableLambda, RunnablePassthrough
from dotenv import load_dotenv

load_dotenv()

model = ChatOpenAI()
prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a helpful chatbot"),
        MessagesPlaceholder(variable_name="history"),
        ("human", "{input}"),
    ]
)
memory = ConversationBufferMemory(return_messages=True)
memory.load_memory_variables({})
chain = (
    RunnablePassthrough.assign(
        history=RunnableLambda(memory.load_memory_variables) | itemgetter("history")
    )
    | prompt
    | model
)
inputs = {"input": "hi im bob"}
response1 = chain.invoke(inputs)
print(response1)

memory.save_context(inputs, {"output": response1.content})
memory.load_memory_variables({})

inputs = {"input": "whats my name"}
response2 = chain.invoke(inputs)
print(response2)