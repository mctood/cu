from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)


@app.get("/{a}/{b}")
async def sum_endpoint(a: int, b: int):
    """Sum endpoint."""
    return {"message": a + b}

# GET /3/4/ -> {"message": 7}

# @app.post(), @app.delete() and so on
# docs available on /docs
