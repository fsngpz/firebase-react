import "../App.css"
import {db} from "../firebase"
import {uid} from "uid"
import { set, ref, onValue, remove, update, child, get} from "firebase/database"
import { useEffect, useState } from "react"

// default object data
const defaultData = 
[
  {
    x: "10.00",
    y: 0,
  },
  {
    x: "11.00",
    y: 0,
  },
  {
    x: "12.00",
    y: 0,
  },
  {
    x: "13.00",
    y: 0,
  },
  {
    x: "14.00",
    y: 0,
  },
  {
    x: "15.00",
    y: 0,
  },
  {
    x: "16.00",
    y: 0,
  },
  {
    x: "17.00",
    y: 0,
  }
]

export function getData(cb){
    let chartData = []
    onValue(ref(db), snapshot => {
        const data = snapshot.val()
        if(data !== null){
            const dataObject = Object.values(data).sort((a,b) => new Date(a.datetime) - new Date(b.datetime))

            chartData = dataObject.map(item => {
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
                const time = new Date(item.datetime).toLocaleTimeString('en',
                 { timeStyle: 'short', hour12: false, timeZone: timezone });

               return {
                x: time,
                y: item.level
               }
            })
            cb(chartData)
        }
    })
   return chartData
}