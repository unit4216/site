/**
 * Returns props for an animation where the target translates vertically into place using given duration.
 * @param duration length of animation
 */
const getAnimProps = (duration: number) => ({
  initial: { x: 0, y: 50, opacity: 0 },
  animate: { x: 0, y: 50, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  viewport: { once: false },
  transition: { duration, ease: 'easeOut' },
});
export default getAnimProps;
