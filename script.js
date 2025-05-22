console.log('hello lulu');
         var car= {
            make:'VW',
            type:'Polo',
            color:'blue',
            isTurnedOn:false,
            numberOfWheels:4,
            seats[
                'seat 1','seat 2','seat 3','seat 4'
            ],
            turnOn:function(){
                this.isTurnedOn=true;
            }
            turnOff:function(){
                this.isTurnedOn=false;
            }
            fly:function(){
                alert('fly');
                this.isTurnedOn=false;
            },
            switchCar:function (isOn){
                console.log('turn car '+isOn);
                if(isO==true){
                    this.isTurnedOn=true;

                }else{
                    this.isTurnedOn=false;
                }

            }
         }