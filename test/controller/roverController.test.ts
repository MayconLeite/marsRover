import {
    parseInput,
    createDirectionState,
    commandRover,
} from "../../src/controller/roverController"
import { North, East, South, West } from "../../src/model/Directions"
import { Rover } from "../../src/model/Rover"

// Mock console.log
global.console = { log: jest.fn() } as any

describe("roverController tests", () => {
    test("parseInput correctly parses the input string", () => {
        const input = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`
        const expectedOutput = {
            plateau: [5, 5],
            rovers: [
                { initialPosition: [1, 2, "N"], commands: "LMLMLMLMM" },
                { initialPosition: [3, 3, "E"], commands: "MMRMMRMRRM" },
            ],
        }
        expect(parseInput(input)).toEqual(expectedOutput)
    })

    test("createDirectionState correctly creates direction states", () => {
        expect(createDirectionState("N")).toBeInstanceOf(North)
        expect(createDirectionState("E")).toBeInstanceOf(East)
        expect(createDirectionState("S")).toBeInstanceOf(South)
        expect(createDirectionState("W")).toBeInstanceOf(West)

        expect(() => createDirectionState("X")).toThrow("Invalid direction: X")
    })

    test("main correctly processes the input and moves the rovers", () => {
        const input = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`

        commandRover(input)

        expect(console.log).toHaveBeenCalledWith("1 3 N")
        expect(console.log).toHaveBeenCalledWith("5 1 E")
    })
})
