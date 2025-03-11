export const variants = {
  hidden: (direction) => ({
    x: direction === 'right' ? '100%' : '-100%',
  }),
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      stiffness: 150,
      damping: 20,
    },
  },
  exit: (direction) => ({
    x: direction === 'right' ? '-100%' : '100%',
    transition: {
      type: 'tween',
      stiffness: 150,
      damping: 20,
    },
  }),
}
