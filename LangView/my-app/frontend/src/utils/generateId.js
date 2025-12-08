const generateId = () => {
     return Date.now().toString() + Math.random().toString().slice(2, 7);
};
export default generateId;