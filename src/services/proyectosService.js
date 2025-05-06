import { db } from '../firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export const getProyectos = async () => {
  try {
    const proyectosRef = collection(db, 'proyectos');
    const q = query(proyectosRef, orderBy('fecha', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const proyectos = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      proyectos[doc.id] = {
        id: doc.id,
        titulo: data.titulo,
        descripcion: data.descripcion,
        tecnologias: data.tecnologias,
        caracteristicas: data.caracteristicas,
        imagen: data.imagen,
        url: data.url,
        fecha: data.fecha?.toDate() || new Date()
      };
    });
    
    return proyectos;
  } catch (error) {
    console.error('Error fetching proyectos:', error);
    throw error;
  }
}; 