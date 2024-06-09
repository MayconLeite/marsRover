import { DirectionState } from "../interface/DirectionState"

class North implements DirectionState {
    turnLeft(): DirectionState {
        return new West()
    }
    turnRight(): DirectionState {
        return new East()
    }
    move(
        coordinateX: number,
        coordinateY: number,
    ): { coordinateX: number; coordinateY: number } {
        return { coordinateX: coordinateX, coordinateY: coordinateY + 1 }
    }
    toString(): string {
        return "N"
    }
}

class East implements DirectionState {
    turnLeft(): DirectionState {
        return new North()
    }
    turnRight(): DirectionState {
        return new South()
    }
    move(
        coordinateX: number,
        coordinateY: number,
    ): { coordinateX: number; coordinateY: number } {
        return { coordinateX: coordinateX + 1, coordinateY: coordinateY }
    }
    toString(): string {
        return "E"
    }
}

class South implements DirectionState {
    turnLeft(): DirectionState {
        return new East()
    }
    turnRight(): DirectionState {
        return new West()
    }
    move(
        coordinateX: number,
        coordinateY: number,
    ): { coordinateX: number; coordinateY: number } {
        return { coordinateX: coordinateX, coordinateY: coordinateY - 1 }
    }
    toString(): string {
        return "S"
    }
}

class West implements DirectionState {
    turnLeft(): DirectionState {
        return new South()
    }
    turnRight(): DirectionState {
        return new North()
    }
    move(
        coordinateX: number,
        coordinateY: number,
    ): { coordinateX: number; coordinateY: number } {
        return { coordinateX: coordinateX - 1, coordinateY: coordinateY }
    }
    toString(): string {
        return "W"
    }
}

export { North, East, South, West }
