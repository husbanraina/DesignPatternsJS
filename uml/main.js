/*
=============================
UML BASICS SUMMARY (LLD)
=============================

UML (Unified Modeling Language):
A standard way to visually represent and design a system.
Used for visualization, documentation, communication, and standardization.

Core Concepts:
- Class: Blueprint defining properties and methods.
- Object: Instance of a class (real-world entity).
- Interface (conceptual in JS): Defines a contract that classes must follow.

Class Diagram:
Shows classes, their attributes, methods, and relationships.
Most commonly used diagram in Low Level Design (LLD).

Relationships:

1. Dependency:
   Temporary usage of another class (not stored).
   Example: Printer → Document

2. Association:
   General relationship where one class stores reference to another.
   No "part-of" meaning.
   Example: Teacher → Student

3. Aggregation:
   Special type of association ("has-a").
   Weak ownership — child can exist independently.
   Example: Department → Professors

4. Composition:
   Strong "has-a" relationship.
   Child is created inside parent and cannot exist independently.
   Example: House → Rooms

5. Inheritance:
   "is-a" relationship.
   Child class extends parent class.
   Example: Dog → Animal

6. Realization:
   Implements a contract (interface-like behavior).
   Example: Wallet → Payment

Hierarchy:
Dependency → temporary use
Association → general relationship
    → Aggregation (weak has-a)
    → Composition (strong has-a)
Inheritance → is-a
Realization → implements contract

Key Takeaway:
UML helps design systems before coding.
Understanding relationships is the foundation of LLD.
*/