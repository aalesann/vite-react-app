export const getTasks = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'))
    console.log(token);
    try {
        const resp = await fetch('http://localhost:4000/tasks', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        if(!resp.ok) throw new Error('Error al obtener las tareas');

        const tasks = await resp.json();
        return tasks;
    } catch (error) {
        console.log(error);
        throw new Error('Error inesperado');
    }
}