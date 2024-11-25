'use client';

import { Button, Heading, Input, Separator, Text } from '@/components/elements';
import { Container, CustomForm } from '@/components/layout';
import { clenSolutionSteps, solveWaterJugChallenge } from '@/algorithms';
import type Step from '@/types/step';
import { useState } from 'react';

export default function Home() {
  const [jugXCapacity, setJugXCapacity] = useState('');
  const [jugYCapacity, setJugYCapacity] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [solutionSteps, setSolutionSteps] = useState<Step[]>([]);

  return (
    <Container className='bg-blue-300 mt-44 p-16 border-solid border-2 border-indigo-600 rounded-lg'>
      <div>
        <header className="mb-8 text-white">
          <Heading>Water Jug Solver</Heading>
          <Text colour="primary">Please, fill in the capacities of the jars</Text>
        </header>
      </div>

      <div className="space-y-3">
        <CustomForm >
          <label className="text-white" htmlFor="jugX">Capacity of the first jar:</label>
          <Input
            type="number"
            id="jugX"
            value={jugXCapacity}
            onChange={(e) => setJugXCapacity(e.target.value)}
          />
        </CustomForm>
        <CustomForm>
          <label className="text-white" htmlFor="jugY">Capacity of the second jar:</label>
          <Input
            type="number"
            id="jugY"
            value={jugYCapacity}
            onChange={(e) => setJugYCapacity(e.target.value)}
          />
        </CustomForm>
        <CustomForm >
          <label className="text-white" htmlFor="goal">Desired amount in the third jar:</label>
          <Input
            type="number"
            id="goal"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
          />
        </CustomForm>
      </div>

      {jugXCapacity && jugYCapacity && goalAmount && (
        <div>
          <div className="mt-6 flex justify-between">
            <Button
              priority="success"
              onClick={() =>
                solveWaterJugChallenge({
                  jugXCapacity,
                  jugYCapacity,
                  goalAmount,
                  setSolutionSteps,
                  solutionSteps
                })
              }
            >
              Solve
            </Button>

            <div>
              <Button
                priority="danger"
                onClick={() =>
                  clenSolutionSteps({
                    setSolutionSteps,
                    setJugXCapacity,
                    setJugYCapacity,
                    setGoalAmount
                  })
                }
              >
                Clean
              </Button>
            </div>
          </div>
        </div>
      )}

      {solutionSteps.length > 0 && (
        <>
          <div >
            <Separator className="my-8" />
          </div>

          <div>
            <div className="flex flex-col gap-6">
              <Heading as="h2">Solution Steps:</Heading>

              <div className="flex flex-col gap-3">
                {solutionSteps.map((step, index) => (
                  <div key={step.number} >
                    <strong>Step {step.number}:</strong> {step.explanation}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}