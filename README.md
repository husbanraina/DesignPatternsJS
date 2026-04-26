# LLD Practice – JavaScript

This repository contains my hands-on practice of core Low Level Design concepts using JavaScript.

---

## Topics Covered

### 1. OOP (Object-Oriented Programming)
- Encapsulation (`#private`, getters)
- Inheritance
- Polymorphism
- Abstraction

Example: Payment system using different payment methods.

---

### 2. UML (Basic Understanding)
Used UML concepts to understand class relationships and system design.

**Relationships:**
- Dependency → temporary use
- Association → general relationship
- Aggregation → weak "has-a"
- Composition → strong "has-a"
- Inheritance → "is-a"
- Realization → implements contract

---

### 3. SOLID Principles

- **SRP**: Split responsibilities (Invoice, Repository, Notification)
- **OCP**: Used polymorphism instead of conditionals (Payment methods)
- **LSP**: Designed proper abstractions (Readable, Writable files)
- **ISP**: Split large interfaces (Printer, Scanner, Copier)
- **DIP**: Used abstraction + dependency injection (Notification system)

---

## Key Learnings
- Prefer abstraction over direct dependency
- Use polymorphism instead of if-else
- Keep classes small and focused
- Design for extension, not modification

---

## Tech
- Node.js (ES Modules)
- No external libraries (pure design practice)

---

## Structure
oop/
uml/
solid/


---

## Next
- Design Patterns
- More LLD problems
- TypeScript (later)

---

 This repo focuses on learning clean design, not production code.