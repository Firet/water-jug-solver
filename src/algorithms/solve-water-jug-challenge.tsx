import { addStep, isSolutionImpossible } from '@/algorithms';
import Step from '@/types/step';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  jugXCapacity: string;
  jugYCapacity: string;
  goalAmount: string;
  setSolutionSteps: Dispatch<SetStateAction<Step[]>>;
  solutionSteps: Step[];
}

export default function solveWaterJugChallenge({
  jugXCapacity,
  jugYCapacity,
  goalAmount,
  setSolutionSteps,
  solutionSteps
}: Props) {
  // Clear the solution steps
  setSolutionSteps([]);

  // Convert values to integers
  const xCapacity = parseInt(jugXCapacity);
  const yCapacity = parseInt(jugYCapacity);
  const zAmount = parseInt(goalAmount);

  if (isSolutionImpossible({ xCapacity, yCapacity, zAmount })) {
    addStep({ number: 1, explanation: 'Cannot be solved', setSolutionSteps });
  } else {
    addStep({ number: 1, explanation: 'Fill Jar X', setSolutionSteps });
    addStep({ number: 2, explanation: 'Transfer from X to Y', setSolutionSteps });
    addStep({ number: 3, explanation: 'Empty Jar Y', setSolutionSteps });
    addStep({ number: 4, explanation: 'Transfer from X to Y', setSolutionSteps });
    return;
  }

  // Example output to check the logic
  // eslint-disable-next-line no-console
  return console.log(solutionSteps);
}
