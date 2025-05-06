import { db } from '../firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export const getProyectos = async () => {
  try {
    console.log('Starting to fetch proyectos from Firestore...');
    const proyectosRef = collection(db, 'proyectos');
    console.log('Collection reference created:', proyectosRef);
    
    const q = query(proyectosRef, orderBy('fecha', 'desc'));
    console.log('Query created:', q);
    
    const querySnapshot = await getDocs(q);
    console.log('Query snapshot received:', querySnapshot);
    
    const proyectos = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log('Processing document:', doc.id, data);
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
    
    console.log('Final proyectos object:', proyectos);
    return proyectos;
  } catch (error) {
    console.error('Error fetching proyectos:', error);
    throw error;
  }
}; 