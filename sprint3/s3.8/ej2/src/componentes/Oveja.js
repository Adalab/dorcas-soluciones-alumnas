import React, { Component } from 'react';
import './oveja.css';
class Oveja extends React.Component {
    
    render() {
        return (
            <div class="sheep">
                <div class="sheep__body p-circle">
                <ul>
                    <li class="sheep__hair sheep__hair--01 p-circle"></li>
                    <li class="sheep__hair sheep__hair--02 p-circle"></li>
                    <li class="sheep__hair sheep__hair--03 p-circle"></li>
                    <li class="sheep__hair sheep__hair--04 p-circle"></li>
                    <li class="sheep__hair sheep__hair--05 p-circle"></li>
                    <li class="sheep__hair sheep__hair--06 p-circle"></li>
                    <li class="sheep__hair sheep__hair--07 p-circle"></li>
                    <li class="sheep__hair sheep__hair--08 p-circle"></li>
                    <li class="sheep__hair sheep__hair--09 p-circle"></li>
                    <li class="sheep__hair sheep__hair--10 p-circle"></li>
                    <li class="sheep__hair sheep__hair--11 p-circle"></li>
                    <li class="sheep__hair sheep__hair--12 p-circle"></li>
                    <li class="sheep__hair sheep__hair--13 p-circle"></li>
                    <li class="sheep__hair sheep__hair--14 p-circle"></li>
                    <li class="sheep__hair sheep__hair--15 p-circle"></li>
                    <li class="sheep__hair sheep__hair--16 p-circle"></li>
                </ul>
                <div class="sheep__face p-circle">
                    <ul class="sheep__bangs p-flex">
                    <li class="sheep__bang p-circle"></li>
                    <li class="sheep__bang p-circle"></li>
                    </ul>
                    <ul class="sheep__eyes p-flex">
                    <li class="sheep__eye p-circle"></li>
                    <li class="sheep__eye p-circle"></li>
                    </ul>
                    <div class="sheep__nose p-circle"></div>
                    <div class="sheep__ear sheep__ear--left p-circle"></div>
                    <div class="sheep__ear sheep__ear--right p-circle"></div>
                </div>
                </div>
                <ul class="sheep__legs p-flex">
                <li class="sheep__leg"></li>
                <li class="sheep__leg"></li>
                </ul>
          </div>

        // <img alt="oveja" src="./oveja.jpg"/>
        );
      }

}

export default Oveja;
