export const getTasks = async () => {
    try {
        const resp = await fetch('http://localhost:4000/tasks', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        const tasks = await resp.json();
        return tasks;
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar las tareas');
    }
}