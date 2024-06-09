export interface DirectionState {
    turnLeft(): DirectionState
    turnRight(): DirectionState
    move(
        coordinateX: number,
        coordinateY: number,
    ): { coordinateX: number; coordinateY: number }
    toString(): string
}
