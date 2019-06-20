import { Component, OnInit } from '@angular/core';
import { Servicelist } from '../service/servicelist.service';
import { Calculator } from '../model/calculator.model';
import{ FormGroup, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  userform:FormGroup;
  result;
  
  calculator:Calculator[] = []


  constructor(private ff:FormBuilder,private service:Servicelist) {
    
   }

  ngOnInit() {
   this.userform=this.ff.group({
     first:[],
     operator:[],
     second:[]
   })
  }
  Result(expr)
  {
    let cal:Calculator = {
      expr:"",
      precision:0,
      result:"",
      time: Date.now()
    }
    
     cal.expr = expr;
     this.service.GetResult(cal)
                  .subscribe(
                    result=>{ 
                      this.result=result['result'];
                      cal.result = this.result
                      this.calculator.unshift(cal);
                      console.log(this.calculator)

                    }
                  )
  }
}
