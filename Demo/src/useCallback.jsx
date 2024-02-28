import { useState, useCallback } from "react";
import Button from "./button";
import React from "react";
export default function UseCallback(){
    const [age,setAge]=useState(21)
    const [salary,setSalary]=useState(50000)

    const increaseAge=useCallback(()=>{
        setAge(age+1);
    }, [age])
    const increaseSalary=useCallback(()=>{
        setSalary(salary+1000);
    }, [salary])
    return(
        <>
        <h2>UseCallback </h2>
        <h2>Age: {age} Salary: {salary}</h2>
        <Button handleClick={increaseAge}>Increase Age </Button>
        <Button handleClick={increaseSalary} >Increase Salary</Button>
        </>
    );
}