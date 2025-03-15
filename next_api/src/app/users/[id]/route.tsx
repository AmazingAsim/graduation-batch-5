import users from '../data'
export async function GET(request: Request, { params }:{ params: { id: string } }) {
    let id = params.id;
    let user = users.find((user) => user.id == parseInt(id));
    return  Response.json(user)
}


export async function PATCH(request:Request, { params }:{ params: { id: string } }) {
        const body = await request.json(); 
        let index = users.findIndex((user) => user.id == parseInt(params.id));
        users[index] = body;
        return Response.json(users)
}

export async function DELETE(request:Request, { params }:{ params: { id: string } }) {
    let index = users.findIndex((user) => user.id == parseInt(params.id));
    users.splice(index, 1);
    return Response.json(users)
};

