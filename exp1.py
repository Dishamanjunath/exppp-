
# DIGITAL LOGIC GATE SIMULATOR
# Using Python

def logic_gates(A, B):

    print("\n----- LOGIC GATE OUTPUTS -----")

    print("AND  :", A & B)
    print("OR   :", A | B)
    print("NAND :", 1 - (A & B))
    print("NOR  :", 1 - (A | B))
    print("XOR  :", A ^ B)
    print("XNOR :", 1 - (A ^ B))
    print("NOT A:", 1 - A)
    print("NOT B:", 1 - B)


def truth_table():

    print("\n----- TRUTH TABLE -----")
    print("A  B | AND OR NAND NOR XOR XNOR")

    for A in range(2):
        for B in range(2):

            AND = A & B
            OR = A | B
            NAND = 1 - AND
            NOR = 1 - OR
            XOR = A ^ B
            XNOR = 1 - XOR

            print(A, " ", B, " | ",
                  AND, "  ",
                  OR, "  ",
                  NAND, "   ",
                  NOR, "  ",
                  XOR, "  ",
                  XNOR)


# MAIN PROGRAM

while True:

    print("\n==============================")
    print(" DIGITAL LOGIC GATE SIMULATOR")
    print("==============================")

    print("1. Simulate Logic Gates")
    print("2. Display Truth Table")
    print("3. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":

        A = int(input("Enter input A (0 or 1): "))

        B = int(input("Enter input B (0 or 1): "))

        if A in (0, 1) and B in (0, 1):
            logic_gates(A, B)
        else:
            print("Invalid input! Enter only 0 or 1.")

    elif choice == "2":

        truth_table()

    elif choice == "3":

        print("Thank you for using the simulator!")
        break

    else:

        print("Invalid choice! Try again.")
