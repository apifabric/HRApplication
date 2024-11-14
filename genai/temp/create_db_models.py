# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Employee(Base):
    """Description: Represents an employee in the organization."""
    __tablename__ = 'employee'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    hiring_date = Column(Date)
    skill_summary = Column(Integer)

    def __repr__(self):
        return f"<Employee(id={self.id}, name={self.name})>"


class Skill(Base):
    """Description: Represents a unique skill that can be acquired by employees."""
    __tablename__ = 'skill'

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String)

    def __repr__(self):
        return f"<Skill(id={self.id}, description={self.description})>"


class EmployeeSkill(Base):
    """Description: Represents the skills associated with each employee."""
    __tablename__ = 'employee_skill'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'))
    skill_id = Column(Integer, ForeignKey('skill.id'))
    rating = Column(Integer)

    def __repr__(self):
        return f"<EmployeeSkill(employee_id={self.employee_id}, skill_id={self.skill_id}, rating={self.rating})>"


class TrainingClass(Base):
    """Description: Represents a training class that employees can enroll in."""
    __tablename__ = 'training_class'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    date_start = Column(Date)
    date_end = Column(Date)

    def __repr__(self):
        return f"<TrainingClass(id={self.id}, title={self.title})>"


class EmployeeTraining(Base):
    """Description: Represents the association between employees and their training classes."""
    __tablename__ = 'employee_training'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'))
    training_class_id = Column(Integer, ForeignKey('training_class.id'))

    def __repr__(self):
        return f"<EmployeeTraining(employee_id={self.employee_id}, training_class_id={self.training_class_id})>"


class SkillMatrix(Base):
    """Description: Represents a matrix of all skills and the training necessary to acquire them."""
    __tablename__ = 'skill_matrix'

    id = Column(Integer, primary_key=True, autoincrement=True)
    skill_id = Column(Integer, ForeignKey('skill.id'))
    training_class_id = Column(Integer, ForeignKey('training_class.id'))

    def __repr__(self):
        return f"<SkillMatrix(skill_id={self.skill_id}, training_class_id={self.training_class_id})>"


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date

# Create Employee test data
employee1 = Employee(id=1, name='Alice', hiring_date=date(2020, 1, 15), skill_summary=10)
employee2 = Employee(id=2, name='Bob', hiring_date=date(2019, 4, 20), skill_summary=15)
employee3 = Employee(id=3, name='Charlie', hiring_date=date(2021, 5, 25), skill_summary=20)
employee4 = Employee(id=4, name='Dana', hiring_date=date(2018, 7, 30), skill_summary=25)

# Create Skill test data
skill1 = Skill(id=1, description='Python Programming')
skill2 = Skill(id=2, description='Data Analysis')
skill3 = Skill(id=3, description='Project Management')
skill4 = Skill(id=4, description='Leadership')

# Create EmployeeSkill test data
employee_skill1 = EmployeeSkill(id=1, employee_id=1, skill_id=1, rating=5)
employee_skill2 = EmployeeSkill(id=2, employee_id=2, skill_id=2, rating=3)
employee_skill3 = EmployeeSkill(id=3, employee_id=3, skill_id=3, rating=4)
employee_skill4 = EmployeeSkill(id=4, employee_id=4, skill_id=4, rating=5)

# Create TrainingClass test data
training_class1 = TrainingClass(id=1, title='Advanced Python', date_start=date(2023, 1, 10), date_end=date(2023, 2, 10))
training_class2 = TrainingClass(id=2, title='Data Science Bootcamp', date_start=date(2023, 3, 15), date_end=date(2023, 4, 15))
training_class3 = TrainingClass(id=3, title='Project Leadership', date_start=date(2023, 5, 20), date_end=date(2023, 6, 20))
training_class4 = TrainingClass(id=4, title='Management Essentials', date_start=date(2023, 7, 25), date_end=date(2023, 8, 25))

# Create EmployeeTraining test data
employee_training1 = EmployeeTraining(id=1, employee_id=1, training_class_id=1)
employee_training2 = EmployeeTraining(id=2, employee_id=2, training_class_id=2)
employee_training3 = EmployeeTraining(id=3, employee_id=3, training_class_id=3)
employee_training4 = EmployeeTraining(id=4, employee_id=4, training_class_id=4)

# Create SkillMatrix test data
skill_matrix1 = SkillMatrix(id=1, skill_id=1, training_class_id=1)
skill_matrix2 = SkillMatrix(id=2, skill_id=2, training_class_id=2)
skill_matrix3 = SkillMatrix(id=3, skill_id=3, training_class_id=3)
skill_matrix4 = SkillMatrix(id=4, skill_id=4, training_class_id=4)


session.add_all([employee1, employee2, employee3, employee4, skill1, skill2, skill3, skill4, employee_skill1, employee_skill2, employee_skill3, employee_skill4, training_class1, training_class2, training_class3, training_class4, employee_training1, employee_training2, employee_training3, employee_training4, skill_matrix1, skill_matrix2, skill_matrix3, skill_matrix4])
session.commit()
