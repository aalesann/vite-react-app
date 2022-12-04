import { useEffect, useMemo, useState } from "react";
import io from 'socket.io-client'

export const useSocket = (serverPath) => {

    // useMemo es para que no se vuelva a crear el socket
    const socket = useMemo(() => io.connect(serverPath, {
        transports: ['websocket'],
    }), [serverPath]);

    const [online, setOnline] = useState(false);

    useEffect(() => {
        setOnline(socket.connected);
    }, [socket])

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Conectado')
            setOnline(true);
        })
    }, [socket])

    useEffect(() => {
        socket.on('disconnect', () => {
            console.log('Desconectado')
            setOnline(false);
        })
    }, [socket])


    return { socket, online }

};
