from langchain.agents import  load_tools, initialize_agent
from langchain.chat_models import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

llm = ChatOpenAI(
    temperature=0.9,
    model_name="gpt-3.5-turbo"
    )

tools = load_tools(["serpapi"], llm=llm)

agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)

print(agent.invoke("Who is the prime minister of norway?what is todays date and time?"))
