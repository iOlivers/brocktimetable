import axios from 'axios';

export const getCourse = async (courseCode, timetableType, session) => {
  try {
    const response = await axios.get('http://158.69.0.14:3001/api/getCourse', {
      params: {
        courseCode,
        timetableType,
        session,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};
