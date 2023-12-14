from langserve import RemoteRunnable

chain = RemoteRunnable("http://localhost:8000/category_chain/c/N4XyA")
res = chain.invoke({"text": "dog"})
print(res)
