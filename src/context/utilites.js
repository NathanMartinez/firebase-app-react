export function handleChange(e, setState) {
  e.preventDefault();
  const {
    name,
    value
  } = e.target;
  setState((prev) => {
    return {
      ...prev,
      [name]: value,
    };
  });
}