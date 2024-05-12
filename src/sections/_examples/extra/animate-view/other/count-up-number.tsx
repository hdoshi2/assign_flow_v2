import { AnimatedCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AnimatedCountUpNumber() {
  return (
    <>
      <AnimatedCountUp component="h6" variant="h1" to={500} unit="+" />

      <AnimatedCountUp component="h6" variant="h1" from={200} to={500.14} toFixed={2} unit="k" />
    </>
  );
}
