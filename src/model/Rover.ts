import { DirectionState } from "../interface/DirectionState"

export class Rover {
    private coordinateX: number
    private coordinateY: number
    private direction: DirectionState

    constructor(
        coordinateX: number,
        coordinateY: number,
        direction: DirectionState,
    ) {
        this.coordinateX = coordinateX
        this.coordinateY = coordinateY
        this.direction = direction
    }

    executeCommands(commands: string): void {
        for (const command of commands) {
            switch (command) {
                case "L":
                    this.direction = this.direction.turnLeft()
                    break
                case "R":
                    this.direction = this.direction.turnRight()
                    break
                case "M":
                    const newPosition = this.direction.move(
                        this.coordinateX,
                        this.coordinateY,
                    )
                    this.coordinateX = newPosition.coordinateX
                    this.coordinateY = newPosition.coordinateY
                    break
            }
        }
    }

    toString(): string {
        return `${this.coordinateX} ${this.coordinateY} ${this.direction.toString()}`
    }
}
