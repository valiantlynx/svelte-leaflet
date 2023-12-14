from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from langserve import add_routes
from src.tutorial.serve import category_chain

app = FastAPI(
  title="LangChain Server",
  version="1.0",
  description="A simple api server using Langchain's Runnable interfaces",
)
 
import debugpy
debugpy.listen(("0.0.0.0", 5678))


# 3. Adding chain route
add_routes(
    app,
    category_chain,
    path="/category_chain",
)


@app.get("/")
async def read_root(): 
    return {"hello": "world"}



