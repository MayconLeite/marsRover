import { Rover } from "../model/Rover"
import { North, East, South, West } from "../model/Directions"
import { DirectionState } from "../interface/DirectionState"

type Plateau = [number, number]
type RoverInput = {
    initialPosition: [number, number, string]
    commands: string
}

function commandRover(input: string) {
    const { rovers } = parseInput(input)

    for (const roverData of rovers) {
        const [coordinateX, coordinateY, direction] = roverData.initialPosition
        const commands = roverData.commands
        const rover = new Rover(
            coordinateX,
            coordinateY,
            createDirectionState(direction),
        )
        rover.executeCommands(commands)
        console.log(rover.toString())
    }
}

function parseInput(input: string): { plateau: Plateau; rovers: RoverInput[] } {
    const lines = input.split("\n").map((line) => line.trim())
    const plateau = lines[0].split(" ").map(Number) as Plateau
    const rovers: RoverInput[] = []

    for (let i = 1; i < lines.length; i += 2) {
        const [coordinateX, coordinateY, direction] = lines[i].split(" ")
        const commands = lines[i + 1]
        rovers.push({
            initialPosition: [
                parseInt(coordinateX),
                parseInt(coordinateY),
                direction as string,
            ],
            commands,
        })
    }

    return { plateau, rovers }
}

function createDirectionState(direction: string): DirectionState {
    switch (direction) {
        case "N":
            return new North()
        case "E":
            return new East()
        case "S":
            return new South()
        case "W":
            return new West()
        default:
            throw new Error(`Invalid direction: ${direction}`)
    }
}

export { commandRover }
