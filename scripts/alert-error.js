export const AlertError = {
  element: document.querySelector('.alert-error'),
  show() {
    AlertError.element.classList.add('show')
  },
  hide() {
    AlertError.element.classList.remove('show')
  },
}
