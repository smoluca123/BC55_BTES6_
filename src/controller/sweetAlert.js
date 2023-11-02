export const swAlert = (
  position = 'center',
  icon = 'success',
  title = 'No Message...',
  showBtn = false,
  timer = 1500
) => {
  Swal.fire({
    position,
    icon,
    title,
    showConfirmButton: showBtn,
    timer,
  });
};
