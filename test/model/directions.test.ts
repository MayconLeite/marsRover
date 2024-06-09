import { Rover } from "../../src/model/Rover"
import { North, East, South, West } from "../../src/model/Directions"
import { parseInput } from "../../src/controller/roverController"

describe("Rover", () => {
    test("should turn left correctly", () => {
        let rover = new Rover(0, 0, new North())
        rover.executeCommands("L")
        expect(rover.toString()).toBe("0 0 W")

        rover = new Rover(0, 0, new West())
        rover.executeCommands("L")
        expect(rover.toString()).toBe("0 0 S")

        rover = new Rover(0, 0, new South())
        rover.executeCommands("L")
        expect(rover.toString()).toBe("0 0 E")

        rover = new Rover(0, 0, new East())
        rover.executeCommands("L")
        expect(rover.toString()).toBe("0 0 N")
    })

    test("should turn right correctly", () => {
        let rover = new Rover(0, 0, new North())
        rover.executeCommands("R")
        expect(rover.toString()).toBe("0 0 E")

        rover = new Rover(0, 0, new East())
        rover.executeCommands("R")
        expect(rover.toString()).toBe("0 0 S")

        rover = new Rover(0, 0, new South())
        rover.executeCommands("R")
        expect(rover.toString()).toBe("0 0 W")

        rover = new Rover(0, 0, new West())
        rover.executeCommands("R")
        expect(rover.toString()).toBe("0 0 N")
    })

    test("should move forward correctly", () => {
        let rover = new Rover(0, 0, new North())
        rover.executeCommands("M")
        expect(rover.toString()).toBe("0 1 N")

        rover = new Rover(0, 0, new East())
        rover.executeCommands("M")
        expect(rover.toString()).toBe("1 0 E")

        rover = new Rover(1, 1, new South())
        rover.executeCommands("M")
        expect(rover.toString()).toBe("1 0 S")

        rover = new Rover(1, 1, new West())
        rover.executeCommands("M")
        expect(rover.toString()).toBe("0 1 W")
    })

    test("should execute complex commands correctly", () => {
        let rover = new Rover(1, 2, new North())
        rover.executeCommands("LMLMLMLMM")
        expect(rover.toString()).toBe("1 3 N")

        rover = new Rover(3, 3, new East())
        rover.executeCommands("MMRMMRMRRM")
        expect(rover.toString()).toBe("5 1 E")
    })

    test("should parse input correctly", () => {
        const input = `5 5
            1 2 N
            LMLMLMLMM
            3 3 E
            MMRMMRMRRM`

        const result = parseInput(input)

        expect(result.plateau).toEqual([5, 5])
        expect(result.rovers.length).toBe(2)
        expect(result.rovers[0].initialPosition).toEqual([1, 2, "N"])
        expect(result.rovers[0].commands).toBe("LMLMLMLMM")
        expect(result.rovers[1].initialPosition).toEqual([3, 3, "E"])
        expect(result.rovers[1].commands).toBe("MMRMMRMRRM")
    })
})
