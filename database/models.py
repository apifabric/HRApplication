# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 14, 2024 22:35:45
# Database: sqlite:////tmp/tmp.TYcQ4aVMtB-01JCPD28ENKFQY5SCAQW1N2K0W/HRApplication/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Employee(SAFRSBaseX, Base):
    """
    description: Description: Represents an employee in the organization.
    """
    __tablename__ = 'employee'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    hiring_date = Column(Date)
    skill_summary = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeSkillList : Mapped[List["EmployeeSkill"]] = relationship(back_populates="employee")
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="employee")



class Skill(SAFRSBaseX, Base):
    """
    description: Description: Represents a unique skill that can be acquired by employees.
    """
    __tablename__ = 'skill'
    _s_collection_name = 'Skill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeSkillList : Mapped[List["EmployeeSkill"]] = relationship(back_populates="skill")
    SkillMatrixList : Mapped[List["SkillMatrix"]] = relationship(back_populates="skill")



class TrainingClass(SAFRSBaseX, Base):
    """
    description: Description: Represents a training class that employees can enroll in.
    """
    __tablename__ = 'training_class'
    _s_collection_name = 'TrainingClass'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    date_start = Column(Date)
    date_end = Column(Date)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="training_class")
    SkillMatrixList : Mapped[List["SkillMatrix"]] = relationship(back_populates="training_class")



class EmployeeSkill(SAFRSBaseX, Base):
    """
    description: Description: Represents the skills associated with each employee.
    """
    __tablename__ = 'employee_skill'
    _s_collection_name = 'EmployeeSkill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'))
    skill_id = Column(ForeignKey('skill.id'))
    rating = Column(Integer)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeSkillList"))
    skill : Mapped["Skill"] = relationship(back_populates=("EmployeeSkillList"))

    # child relationships (access children)



class EmployeeTraining(SAFRSBaseX, Base):
    """
    description: Description: Represents the association between employees and their training classes.
    """
    __tablename__ = 'employee_training'
    _s_collection_name = 'EmployeeTraining'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'))
    training_class_id = Column(ForeignKey('training_class.id'))

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeTrainingList"))
    training_class : Mapped["TrainingClass"] = relationship(back_populates=("EmployeeTrainingList"))

    # child relationships (access children)



class SkillMatrix(SAFRSBaseX, Base):
    """
    description: Description: Represents a matrix of all skills and the training necessary to acquire them.
    """
    __tablename__ = 'skill_matrix'
    _s_collection_name = 'SkillMatrix'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    skill_id = Column(ForeignKey('skill.id'))
    training_class_id = Column(ForeignKey('training_class.id'))

    # parent relationships (access parent)
    skill : Mapped["Skill"] = relationship(back_populates=("SkillMatrixList"))
    training_class : Mapped["TrainingClass"] = relationship(back_populates=("SkillMatrixList"))

    # child relationships (access children)
