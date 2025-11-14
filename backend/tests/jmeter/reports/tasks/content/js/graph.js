/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 44.0, "minX": 0.0, "maxY": 385.0, "series": [{"data": [[0.0, 44.0], [0.1, 44.0], [0.2, 44.0], [0.3, 44.0], [0.4, 44.0], [0.5, 47.0], [0.6, 47.0], [0.7, 47.0], [0.8, 47.0], [0.9, 47.0], [1.0, 49.0], [1.1, 49.0], [1.2, 49.0], [1.3, 49.0], [1.4, 49.0], [1.5, 55.0], [1.6, 55.0], [1.7, 55.0], [1.8, 55.0], [1.9, 55.0], [2.0, 59.0], [2.1, 59.0], [2.2, 59.0], [2.3, 59.0], [2.4, 59.0], [2.5, 60.0], [2.6, 60.0], [2.7, 60.0], [2.8, 60.0], [2.9, 60.0], [3.0, 64.0], [3.1, 64.0], [3.2, 64.0], [3.3, 64.0], [3.4, 64.0], [3.5, 66.0], [3.6, 66.0], [3.7, 66.0], [3.8, 66.0], [3.9, 66.0], [4.0, 71.0], [4.1, 71.0], [4.2, 71.0], [4.3, 71.0], [4.4, 71.0], [4.5, 72.0], [4.6, 72.0], [4.7, 72.0], [4.8, 72.0], [4.9, 72.0], [5.0, 75.0], [5.1, 75.0], [5.2, 75.0], [5.3, 75.0], [5.4, 75.0], [5.5, 77.0], [5.6, 77.0], [5.7, 77.0], [5.8, 77.0], [5.9, 77.0], [6.0, 82.0], [6.1, 82.0], [6.2, 82.0], [6.3, 82.0], [6.4, 82.0], [6.5, 82.0], [6.6, 82.0], [6.7, 82.0], [6.8, 82.0], [6.9, 82.0], [7.0, 83.0], [7.1, 83.0], [7.2, 83.0], [7.3, 83.0], [7.4, 83.0], [7.5, 85.0], [7.6, 85.0], [7.7, 85.0], [7.8, 85.0], [7.9, 85.0], [8.0, 89.0], [8.1, 89.0], [8.2, 89.0], [8.3, 89.0], [8.4, 89.0], [8.5, 89.0], [8.6, 89.0], [8.7, 89.0], [8.8, 89.0], [8.9, 89.0], [9.0, 93.0], [9.1, 93.0], [9.2, 93.0], [9.3, 93.0], [9.4, 93.0], [9.5, 94.0], [9.6, 94.0], [9.7, 94.0], [9.8, 94.0], [9.9, 94.0], [10.0, 99.0], [10.1, 99.0], [10.2, 99.0], [10.3, 99.0], [10.4, 99.0], [10.5, 99.0], [10.6, 99.0], [10.7, 99.0], [10.8, 99.0], [10.9, 99.0], [11.0, 100.0], [11.1, 100.0], [11.2, 100.0], [11.3, 100.0], [11.4, 100.0], [11.5, 101.0], [11.6, 101.0], [11.7, 101.0], [11.8, 101.0], [11.9, 101.0], [12.0, 102.0], [12.1, 102.0], [12.2, 102.0], [12.3, 102.0], [12.4, 102.0], [12.5, 103.0], [12.6, 103.0], [12.7, 103.0], [12.8, 103.0], [12.9, 103.0], [13.0, 103.0], [13.1, 103.0], [13.2, 103.0], [13.3, 103.0], [13.4, 103.0], [13.5, 105.0], [13.6, 105.0], [13.7, 105.0], [13.8, 105.0], [13.9, 105.0], [14.0, 107.0], [14.1, 107.0], [14.2, 107.0], [14.3, 107.0], [14.4, 107.0], [14.5, 107.0], [14.6, 107.0], [14.7, 107.0], [14.8, 107.0], [14.9, 107.0], [15.0, 109.0], [15.1, 109.0], [15.2, 109.0], [15.3, 109.0], [15.4, 109.0], [15.5, 109.0], [15.6, 109.0], [15.7, 109.0], [15.8, 109.0], [15.9, 109.0], [16.0, 109.0], [16.1, 109.0], [16.2, 109.0], [16.3, 109.0], [16.4, 109.0], [16.5, 109.0], [16.6, 109.0], [16.7, 109.0], [16.8, 109.0], [16.9, 109.0], [17.0, 109.0], [17.1, 109.0], [17.2, 109.0], [17.3, 109.0], [17.4, 109.0], [17.5, 110.0], [17.6, 110.0], [17.7, 110.0], [17.8, 110.0], [17.9, 110.0], [18.0, 111.0], [18.1, 111.0], [18.2, 111.0], [18.3, 111.0], [18.4, 111.0], [18.5, 111.0], [18.6, 111.0], [18.7, 111.0], [18.8, 111.0], [18.9, 111.0], [19.0, 112.0], [19.1, 112.0], [19.2, 112.0], [19.3, 112.0], [19.4, 112.0], [19.5, 112.0], [19.6, 112.0], [19.7, 112.0], [19.8, 112.0], [19.9, 112.0], [20.0, 112.0], [20.1, 112.0], [20.2, 112.0], [20.3, 112.0], [20.4, 112.0], [20.5, 113.0], [20.6, 113.0], [20.7, 113.0], [20.8, 113.0], [20.9, 113.0], [21.0, 114.0], [21.1, 114.0], [21.2, 114.0], [21.3, 114.0], [21.4, 114.0], [21.5, 116.0], [21.6, 116.0], [21.7, 116.0], [21.8, 116.0], [21.9, 116.0], [22.0, 118.0], [22.1, 118.0], [22.2, 118.0], [22.3, 118.0], [22.4, 118.0], [22.5, 119.0], [22.6, 119.0], [22.7, 119.0], [22.8, 119.0], [22.9, 119.0], [23.0, 122.0], [23.1, 122.0], [23.2, 122.0], [23.3, 122.0], [23.4, 122.0], [23.5, 123.0], [23.6, 123.0], [23.7, 123.0], [23.8, 123.0], [23.9, 123.0], [24.0, 128.0], [24.1, 128.0], [24.2, 128.0], [24.3, 128.0], [24.4, 128.0], [24.5, 129.0], [24.6, 129.0], [24.7, 129.0], [24.8, 129.0], [24.9, 129.0], [25.0, 133.0], [25.1, 133.0], [25.2, 133.0], [25.3, 133.0], [25.4, 133.0], [25.5, 135.0], [25.6, 135.0], [25.7, 135.0], [25.8, 135.0], [25.9, 135.0], [26.0, 137.0], [26.1, 137.0], [26.2, 137.0], [26.3, 137.0], [26.4, 137.0], [26.5, 140.0], [26.6, 140.0], [26.7, 140.0], [26.8, 140.0], [26.9, 140.0], [27.0, 141.0], [27.1, 141.0], [27.2, 141.0], [27.3, 141.0], [27.4, 141.0], [27.5, 145.0], [27.6, 145.0], [27.7, 145.0], [27.8, 145.0], [27.9, 145.0], [28.0, 147.0], [28.1, 147.0], [28.2, 147.0], [28.3, 147.0], [28.4, 147.0], [28.5, 148.0], [28.6, 148.0], [28.7, 148.0], [28.8, 148.0], [28.9, 148.0], [29.0, 150.0], [29.1, 150.0], [29.2, 150.0], [29.3, 150.0], [29.4, 150.0], [29.5, 154.0], [29.6, 154.0], [29.7, 154.0], [29.8, 154.0], [29.9, 154.0], [30.0, 157.0], [30.1, 157.0], [30.2, 157.0], [30.3, 157.0], [30.4, 157.0], [30.5, 160.0], [30.6, 160.0], [30.7, 160.0], [30.8, 160.0], [30.9, 160.0], [31.0, 162.0], [31.1, 162.0], [31.2, 162.0], [31.3, 162.0], [31.4, 162.0], [31.5, 165.0], [31.6, 165.0], [31.7, 165.0], [31.8, 165.0], [31.9, 165.0], [32.0, 165.0], [32.1, 165.0], [32.2, 165.0], [32.3, 165.0], [32.4, 165.0], [32.5, 167.0], [32.6, 167.0], [32.7, 167.0], [32.8, 167.0], [32.9, 167.0], [33.0, 169.0], [33.1, 169.0], [33.2, 169.0], [33.3, 169.0], [33.4, 169.0], [33.5, 169.0], [33.6, 169.0], [33.7, 169.0], [33.8, 169.0], [33.9, 169.0], [34.0, 172.0], [34.1, 172.0], [34.2, 172.0], [34.3, 172.0], [34.4, 172.0], [34.5, 178.0], [34.6, 178.0], [34.7, 178.0], [34.8, 178.0], [34.9, 178.0], [35.0, 178.0], [35.1, 178.0], [35.2, 178.0], [35.3, 178.0], [35.4, 178.0], [35.5, 180.0], [35.6, 180.0], [35.7, 180.0], [35.8, 180.0], [35.9, 180.0], [36.0, 181.0], [36.1, 181.0], [36.2, 181.0], [36.3, 181.0], [36.4, 181.0], [36.5, 183.0], [36.6, 183.0], [36.7, 183.0], [36.8, 183.0], [36.9, 183.0], [37.0, 184.0], [37.1, 184.0], [37.2, 184.0], [37.3, 184.0], [37.4, 184.0], [37.5, 184.0], [37.6, 184.0], [37.7, 184.0], [37.8, 184.0], [37.9, 184.0], [38.0, 188.0], [38.1, 188.0], [38.2, 188.0], [38.3, 188.0], [38.4, 188.0], [38.5, 188.0], [38.6, 188.0], [38.7, 188.0], [38.8, 188.0], [38.9, 188.0], [39.0, 192.0], [39.1, 192.0], [39.2, 192.0], [39.3, 192.0], [39.4, 192.0], [39.5, 193.0], [39.6, 193.0], [39.7, 193.0], [39.8, 193.0], [39.9, 193.0], [40.0, 196.0], [40.1, 196.0], [40.2, 196.0], [40.3, 196.0], [40.4, 196.0], [40.5, 197.0], [40.6, 197.0], [40.7, 197.0], [40.8, 197.0], [40.9, 197.0], [41.0, 198.0], [41.1, 198.0], [41.2, 198.0], [41.3, 198.0], [41.4, 198.0], [41.5, 200.0], [41.6, 200.0], [41.7, 200.0], [41.8, 200.0], [41.9, 200.0], [42.0, 201.0], [42.1, 201.0], [42.2, 201.0], [42.3, 201.0], [42.4, 201.0], [42.5, 202.0], [42.6, 202.0], [42.7, 202.0], [42.8, 202.0], [42.9, 202.0], [43.0, 203.0], [43.1, 203.0], [43.2, 203.0], [43.3, 203.0], [43.4, 203.0], [43.5, 204.0], [43.6, 204.0], [43.7, 204.0], [43.8, 204.0], [43.9, 204.0], [44.0, 205.0], [44.1, 205.0], [44.2, 205.0], [44.3, 205.0], [44.4, 205.0], [44.5, 206.0], [44.6, 206.0], [44.7, 206.0], [44.8, 206.0], [44.9, 206.0], [45.0, 206.0], [45.1, 206.0], [45.2, 206.0], [45.3, 206.0], [45.4, 206.0], [45.5, 209.0], [45.6, 209.0], [45.7, 209.0], [45.8, 209.0], [45.9, 209.0], [46.0, 210.0], [46.1, 210.0], [46.2, 210.0], [46.3, 210.0], [46.4, 210.0], [46.5, 211.0], [46.6, 211.0], [46.7, 211.0], [46.8, 211.0], [46.9, 211.0], [47.0, 211.0], [47.1, 211.0], [47.2, 211.0], [47.3, 211.0], [47.4, 211.0], [47.5, 218.0], [47.6, 218.0], [47.7, 218.0], [47.8, 218.0], [47.9, 218.0], [48.0, 220.0], [48.1, 220.0], [48.2, 220.0], [48.3, 220.0], [48.4, 220.0], [48.5, 222.0], [48.6, 222.0], [48.7, 222.0], [48.8, 222.0], [48.9, 222.0], [49.0, 225.0], [49.1, 225.0], [49.2, 225.0], [49.3, 225.0], [49.4, 225.0], [49.5, 226.0], [49.6, 226.0], [49.7, 226.0], [49.8, 226.0], [49.9, 226.0], [50.0, 226.0], [50.1, 226.0], [50.2, 226.0], [50.3, 226.0], [50.4, 226.0], [50.5, 227.0], [50.6, 227.0], [50.7, 227.0], [50.8, 227.0], [50.9, 227.0], [51.0, 229.0], [51.1, 229.0], [51.2, 229.0], [51.3, 229.0], [51.4, 229.0], [51.5, 230.0], [51.6, 230.0], [51.7, 230.0], [51.8, 230.0], [51.9, 230.0], [52.0, 233.0], [52.1, 233.0], [52.2, 233.0], [52.3, 233.0], [52.4, 233.0], [52.5, 234.0], [52.6, 234.0], [52.7, 234.0], [52.8, 234.0], [52.9, 234.0], [53.0, 234.0], [53.1, 234.0], [53.2, 234.0], [53.3, 234.0], [53.4, 234.0], [53.5, 240.0], [53.6, 240.0], [53.7, 240.0], [53.8, 240.0], [53.9, 240.0], [54.0, 241.0], [54.1, 241.0], [54.2, 241.0], [54.3, 241.0], [54.4, 241.0], [54.5, 243.0], [54.6, 243.0], [54.7, 243.0], [54.8, 243.0], [54.9, 243.0], [55.0, 244.0], [55.1, 244.0], [55.2, 244.0], [55.3, 244.0], [55.4, 244.0], [55.5, 245.0], [55.6, 245.0], [55.7, 245.0], [55.8, 245.0], [55.9, 245.0], [56.0, 247.0], [56.1, 247.0], [56.2, 247.0], [56.3, 247.0], [56.4, 247.0], [56.5, 247.0], [56.6, 247.0], [56.7, 247.0], [56.8, 247.0], [56.9, 247.0], [57.0, 248.0], [57.1, 248.0], [57.2, 248.0], [57.3, 248.0], [57.4, 248.0], [57.5, 251.0], [57.6, 251.0], [57.7, 251.0], [57.8, 251.0], [57.9, 251.0], [58.0, 254.0], [58.1, 254.0], [58.2, 254.0], [58.3, 254.0], [58.4, 254.0], [58.5, 255.0], [58.6, 255.0], [58.7, 255.0], [58.8, 255.0], [58.9, 255.0], [59.0, 256.0], [59.1, 256.0], [59.2, 256.0], [59.3, 256.0], [59.4, 256.0], [59.5, 256.0], [59.6, 256.0], [59.7, 256.0], [59.8, 256.0], [59.9, 256.0], [60.0, 257.0], [60.1, 257.0], [60.2, 257.0], [60.3, 257.0], [60.4, 257.0], [60.5, 257.0], [60.6, 257.0], [60.7, 257.0], [60.8, 257.0], [60.9, 257.0], [61.0, 258.0], [61.1, 258.0], [61.2, 258.0], [61.3, 258.0], [61.4, 258.0], [61.5, 259.0], [61.6, 259.0], [61.7, 259.0], [61.8, 259.0], [61.9, 259.0], [62.0, 259.0], [62.1, 259.0], [62.2, 259.0], [62.3, 259.0], [62.4, 259.0], [62.5, 261.0], [62.6, 261.0], [62.7, 261.0], [62.8, 261.0], [62.9, 261.0], [63.0, 266.0], [63.1, 266.0], [63.2, 266.0], [63.3, 266.0], [63.4, 266.0], [63.5, 267.0], [63.6, 267.0], [63.7, 267.0], [63.8, 267.0], [63.9, 267.0], [64.0, 267.0], [64.1, 267.0], [64.2, 267.0], [64.3, 267.0], [64.4, 267.0], [64.5, 269.0], [64.6, 269.0], [64.7, 269.0], [64.8, 269.0], [64.9, 269.0], [65.0, 271.0], [65.1, 271.0], [65.2, 271.0], [65.3, 271.0], [65.4, 271.0], [65.5, 273.0], [65.6, 273.0], [65.7, 273.0], [65.8, 273.0], [65.9, 273.0], [66.0, 274.0], [66.1, 274.0], [66.2, 274.0], [66.3, 274.0], [66.4, 274.0], [66.5, 275.0], [66.6, 275.0], [66.7, 275.0], [66.8, 275.0], [66.9, 275.0], [67.0, 276.0], [67.1, 276.0], [67.2, 276.0], [67.3, 276.0], [67.4, 276.0], [67.5, 279.0], [67.6, 279.0], [67.7, 279.0], [67.8, 279.0], [67.9, 279.0], [68.0, 280.0], [68.1, 280.0], [68.2, 280.0], [68.3, 280.0], [68.4, 280.0], [68.5, 282.0], [68.6, 282.0], [68.7, 282.0], [68.8, 282.0], [68.9, 282.0], [69.0, 284.0], [69.1, 284.0], [69.2, 284.0], [69.3, 284.0], [69.4, 284.0], [69.5, 285.0], [69.6, 285.0], [69.7, 285.0], [69.8, 285.0], [69.9, 285.0], [70.0, 285.0], [70.1, 285.0], [70.2, 285.0], [70.3, 285.0], [70.4, 285.0], [70.5, 285.0], [70.6, 285.0], [70.7, 285.0], [70.8, 285.0], [70.9, 285.0], [71.0, 287.0], [71.1, 287.0], [71.2, 287.0], [71.3, 287.0], [71.4, 287.0], [71.5, 288.0], [71.6, 288.0], [71.7, 288.0], [71.8, 288.0], [71.9, 288.0], [72.0, 288.0], [72.1, 288.0], [72.2, 288.0], [72.3, 288.0], [72.4, 288.0], [72.5, 289.0], [72.6, 289.0], [72.7, 289.0], [72.8, 289.0], [72.9, 289.0], [73.0, 291.0], [73.1, 291.0], [73.2, 291.0], [73.3, 291.0], [73.4, 291.0], [73.5, 292.0], [73.6, 292.0], [73.7, 292.0], [73.8, 292.0], [73.9, 292.0], [74.0, 293.0], [74.1, 293.0], [74.2, 293.0], [74.3, 293.0], [74.4, 293.0], [74.5, 295.0], [74.6, 295.0], [74.7, 295.0], [74.8, 295.0], [74.9, 295.0], [75.0, 295.0], [75.1, 295.0], [75.2, 295.0], [75.3, 295.0], [75.4, 295.0], [75.5, 297.0], [75.6, 297.0], [75.7, 297.0], [75.8, 297.0], [75.9, 297.0], [76.0, 300.0], [76.1, 300.0], [76.2, 300.0], [76.3, 300.0], [76.4, 300.0], [76.5, 300.0], [76.6, 300.0], [76.7, 300.0], [76.8, 300.0], [76.9, 300.0], [77.0, 301.0], [77.1, 301.0], [77.2, 301.0], [77.3, 301.0], [77.4, 301.0], [77.5, 302.0], [77.6, 302.0], [77.7, 302.0], [77.8, 302.0], [77.9, 302.0], [78.0, 303.0], [78.1, 303.0], [78.2, 303.0], [78.3, 303.0], [78.4, 303.0], [78.5, 303.0], [78.6, 303.0], [78.7, 303.0], [78.8, 303.0], [78.9, 303.0], [79.0, 307.0], [79.1, 307.0], [79.2, 307.0], [79.3, 307.0], [79.4, 307.0], [79.5, 308.0], [79.6, 308.0], [79.7, 308.0], [79.8, 308.0], [79.9, 308.0], [80.0, 308.0], [80.1, 308.0], [80.2, 308.0], [80.3, 308.0], [80.4, 308.0], [80.5, 311.0], [80.6, 311.0], [80.7, 311.0], [80.8, 311.0], [80.9, 311.0], [81.0, 312.0], [81.1, 312.0], [81.2, 312.0], [81.3, 312.0], [81.4, 312.0], [81.5, 313.0], [81.6, 313.0], [81.7, 313.0], [81.8, 313.0], [81.9, 313.0], [82.0, 314.0], [82.1, 314.0], [82.2, 314.0], [82.3, 314.0], [82.4, 314.0], [82.5, 314.0], [82.6, 314.0], [82.7, 314.0], [82.8, 314.0], [82.9, 314.0], [83.0, 315.0], [83.1, 315.0], [83.2, 315.0], [83.3, 315.0], [83.4, 315.0], [83.5, 316.0], [83.6, 316.0], [83.7, 316.0], [83.8, 316.0], [83.9, 316.0], [84.0, 317.0], [84.1, 317.0], [84.2, 317.0], [84.3, 317.0], [84.4, 317.0], [84.5, 318.0], [84.6, 318.0], [84.7, 318.0], [84.8, 318.0], [84.9, 318.0], [85.0, 319.0], [85.1, 319.0], [85.2, 319.0], [85.3, 319.0], [85.4, 319.0], [85.5, 321.0], [85.6, 321.0], [85.7, 321.0], [85.8, 321.0], [85.9, 321.0], [86.0, 321.0], [86.1, 321.0], [86.2, 321.0], [86.3, 321.0], [86.4, 321.0], [86.5, 321.0], [86.6, 321.0], [86.7, 321.0], [86.8, 321.0], [86.9, 321.0], [87.0, 324.0], [87.1, 324.0], [87.2, 324.0], [87.3, 324.0], [87.4, 324.0], [87.5, 326.0], [87.6, 326.0], [87.7, 326.0], [87.8, 326.0], [87.9, 326.0], [88.0, 329.0], [88.1, 329.0], [88.2, 329.0], [88.3, 329.0], [88.4, 329.0], [88.5, 329.0], [88.6, 329.0], [88.7, 329.0], [88.8, 329.0], [88.9, 329.0], [89.0, 332.0], [89.1, 332.0], [89.2, 332.0], [89.3, 332.0], [89.4, 332.0], [89.5, 333.0], [89.6, 333.0], [89.7, 333.0], [89.8, 333.0], [89.9, 333.0], [90.0, 335.0], [90.1, 335.0], [90.2, 335.0], [90.3, 335.0], [90.4, 335.0], [90.5, 336.0], [90.6, 336.0], [90.7, 336.0], [90.8, 336.0], [90.9, 336.0], [91.0, 340.0], [91.1, 340.0], [91.2, 340.0], [91.3, 340.0], [91.4, 340.0], [91.5, 343.0], [91.6, 343.0], [91.7, 343.0], [91.8, 343.0], [91.9, 343.0], [92.0, 345.0], [92.1, 345.0], [92.2, 345.0], [92.3, 345.0], [92.4, 345.0], [92.5, 345.0], [92.6, 345.0], [92.7, 345.0], [92.8, 345.0], [92.9, 345.0], [93.0, 346.0], [93.1, 346.0], [93.2, 346.0], [93.3, 346.0], [93.4, 346.0], [93.5, 347.0], [93.6, 347.0], [93.7, 347.0], [93.8, 347.0], [93.9, 347.0], [94.0, 348.0], [94.1, 348.0], [94.2, 348.0], [94.3, 348.0], [94.4, 348.0], [94.5, 348.0], [94.6, 348.0], [94.7, 348.0], [94.8, 348.0], [94.9, 348.0], [95.0, 349.0], [95.1, 349.0], [95.2, 349.0], [95.3, 349.0], [95.4, 349.0], [95.5, 351.0], [95.6, 351.0], [95.7, 351.0], [95.8, 351.0], [95.9, 351.0], [96.0, 352.0], [96.1, 352.0], [96.2, 352.0], [96.3, 352.0], [96.4, 352.0], [96.5, 359.0], [96.6, 359.0], [96.7, 359.0], [96.8, 359.0], [96.9, 359.0], [97.0, 366.0], [97.1, 366.0], [97.2, 366.0], [97.3, 366.0], [97.4, 366.0], [97.5, 366.0], [97.6, 366.0], [97.7, 366.0], [97.8, 366.0], [97.9, 366.0], [98.0, 367.0], [98.1, 367.0], [98.2, 367.0], [98.3, 367.0], [98.4, 367.0], [98.5, 373.0], [98.6, 373.0], [98.7, 373.0], [98.8, 373.0], [98.9, 373.0], [99.0, 376.0], [99.1, 376.0], [99.2, 376.0], [99.3, 376.0], [99.4, 376.0], [99.5, 385.0], [99.6, 385.0], [99.7, 385.0], [99.8, 385.0], [99.9, 385.0]], "isOverall": false, "label": "tasks", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 22.0, "minX": 0.0, "maxY": 69.0, "series": [{"data": [[0.0, 22.0], [300.0, 48.0], [200.0, 69.0], [100.0, 61.0]], "isOverall": false, "label": "tasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 200.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [[0.0, 200.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 59.37499999999999, "minX": 1.76315754E12, "maxY": 59.37499999999999, "series": [{"data": [[1.76315754E12, 59.37499999999999]], "isOverall": false, "label": "API", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76315754E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 44.0, "minX": 1.0, "maxY": 367.0, "series": [{"data": [[2.0, 47.0], [5.0, 54.666666666666664], [7.0, 61.5], [9.0, 68.5], [12.0, 76.33333333333333], [13.0, 82.0], [14.0, 83.0], [16.0, 87.0], [19.0, 93.66666666666667], [20.0, 94.0], [22.0, 103.0], [23.0, 111.0], [24.0, 115.0], [25.0, 122.0], [27.0, 128.25], [28.0, 136.0], [29.0, 142.5], [30.0, 147.0], [31.0, 149.0], [33.0, 162.0], [32.0, 157.0], [35.0, 169.0], [34.0, 167.0], [37.0, 179.5], [36.0, 172.0], [39.0, 189.25], [38.0, 184.0], [41.0, 199.66666666666666], [43.0, 210.5], [42.0, 207.5], [45.0, 220.0], [47.0, 230.0], [46.0, 225.5], [49.0, 237.5], [48.0, 234.0], [51.0, 248.0], [53.0, 257.8], [52.0, 250.5], [54.0, 262.5], [57.0, 282.0], [56.0, 272.5], [59.0, 292.0], [58.0, 281.8], [61.0, 297.5], [60.0, 288.6666666666667], [63.0, 317.6666666666667], [62.0, 303.6666666666667], [66.0, 305.0], [67.0, 316.0], [65.0, 320.6], [64.0, 338.6666666666667], [71.0, 345.0], [69.0, 367.0], [68.0, 330.0], [75.0, 333.5], [74.0, 340.0], [73.0, 347.75], [72.0, 363.6666666666667], [79.0, 271.83333333333337], [78.0, 296.5], [77.0, 314.2], [76.0, 333.25], [80.0, 267.3333333333333], [81.0, 269.5], [90.0, 107.75000000000001], [91.0, 94.5], [92.0, 113.5], [93.0, 102.0], [103.0, 178.0], [101.0, 150.0], [107.0, 193.0], [104.0, 160.5], [108.0, 202.0], [109.0, 202.75], [115.0, 227.33333333333334], [112.0, 215.5], [114.0, 183.0], [116.0, 241.0], [1.0, 44.0]], "isOverall": false, "label": "tasks", "isController": false}, {"data": [[59.37499999999999, 217.44999999999996]], "isOverall": false, "label": "tasks-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 116.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 416.6666666666667, "minX": 1.76315754E12, "maxY": 3143.3333333333335, "series": [{"data": [[1.76315754E12, 3143.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76315754E12, 416.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76315754E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 217.44999999999996, "minX": 1.76315754E12, "maxY": 217.44999999999996, "series": [{"data": [[1.76315754E12, 217.44999999999996]], "isOverall": false, "label": "tasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76315754E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 216.67499999999993, "minX": 1.76315754E12, "maxY": 216.67499999999993, "series": [{"data": [[1.76315754E12, 216.67499999999993]], "isOverall": false, "label": "tasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76315754E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 20.760000000000012, "minX": 1.76315754E12, "maxY": 20.760000000000012, "series": [{"data": [[1.76315754E12, 20.760000000000012]], "isOverall": false, "label": "tasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76315754E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 44.0, "minX": 1.76315754E12, "maxY": 385.0, "series": [{"data": [[1.76315754E12, 385.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76315754E12, 44.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76315754E12, 334.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76315754E12, 375.97]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76315754E12, 226.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76315754E12, 348.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76315754E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 226.0, "minX": 200.0, "maxY": 226.0, "series": [{"data": [[200.0, 226.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 226.0, "minX": 200.0, "maxY": 226.0, "series": [{"data": [[200.0, 226.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76315754E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76315754E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76315754E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76315754E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76315754E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76315754E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76315754E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76315754E12, 3.3333333333333335]], "isOverall": false, "label": "tasks-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76315754E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76315754E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76315754E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76315754E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

