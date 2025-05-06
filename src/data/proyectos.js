import { getProyectos } from '../services/proyectosService';

// This will be populated with data from Firestore
export let proyectos = {};

// Function to initialize and update proyectos data
export const initializeProyectos = async () => {
  console.log('Initializing proyectos...');
  try {
    proyectos = await getProyectos();
    console.log('Proyectos initialized successfully:', proyectos);
  } catch (error) {
    console.error('Error initializing proyectos:', error);
    proyectos = {}; // Fallback to empty object if there's an error
  }
}; 