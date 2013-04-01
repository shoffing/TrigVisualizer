function equation(t, a)
{
	var xSize = 272;
	var ySize = 272;
	var zSize = 272;
	
	var curEq = document.getElementById("equation").selectedIndex;
	
	var returnVal;
	
	if(curEq == 0) {
		// Blob
		returnVal = nVec(
			sin(off1 + sin(t + off1) * cos(t + off1)),
			cos(off2 + sin(t + off2) * cos(t + off2)),
			sin(off3 + sin(t + off3) * cos(t + off3))
		);
	} else if(curEq == 1) {
		// Blob 2
		returnVal = nVec(
			sin(off1 + sin(t - off2)*cos(t + off3)),
			sin(off1 + sin(t - off3)*sin(t + off2)),
			cos(off3 + cos(t + off1)*sin(t - off2))
		);
	} else if(curEq == 2) {
		// Cylinder
		returnVal = nVec(
			sin(off1 + sin(t - off2)*cos(t + off1)),
			sin(t + off2),
			cos(off3 + cos(t + off1)*sin(t - off3))
		);
	} else if(curEq == 3) {
		// Funky cylinder
		returnVal = nVec(
			sin(off1 + sin(t + off1)),
			constrain(cos(off2 + sin(t + (doff2 * 64) * sin(off2)) * cos(t + (doff2 * 64) * cos(off2))) + 0.5 * sin(t + off2), -1, 1),
			cos(off3 + cos(t + off3))
		);
	} else if(curEq == 4) {
		// Mushroom
		var yVal = Math.abs(cos(off2 + sin(t + (doff2 * 64) * sin(off2)) * cos(t + (doff2 * 64) * cos(off2))) + 0.5 * sin(t + off2) - 0.5) - 1;
		var yvr = constrain(0.25 + Math.pow(1.0 - constrain(Math.abs(0.75 - (yVal + 0.5)), 0, 1), 2), 0, 1);
		returnVal = nVec(
			yvr * sin(off1 + sin(t + off1)),
			yVal,
			yvr * sin(off3 + sin(t + off3))
		);
	} else if(curEq == 5) {
		// Sphericalish
		returnVal = nVec(
			sin(off1 + sin(t - off2)*cos(t + off1)),
			sin(t + off2),
			cos(off3 + cos(t + off1)*sin(t - off3))
		);
		
		returnVal = rotateVector(returnVal, nVec(1,0,0), Math.PI * (1/8) * sin(off1) * cos(off3) * t);
	} else if(curEq == 6) {
		// Swirly
		returnVal = nVec(
			sin(off1 + sin(t - off2)*cos(t + off1)),
			sin(t + off2),
			cos(off3 + cos(t + off1)*sin(t - off3))
		);
		
		returnVal = rotateVector(returnVal, nVec(0,1,0), sin(t) * a);
	}  else if(curEq == 7) {
		// Wobble
		returnVal = nVec(
			sin(t + 2 * cos(off1) * cos(off2)),
			0,
			cos(t + 2 * sin(off3) * sin(off2))
		);
		
		returnVal = rotateVector(returnVal, nVec(1,0,0), sin(off2) * a);
	} else {
		// Default
		returnVal = nVec(
			sin(t + off1),
			sin(t + off2),
			sin(t + off3)
		);
	}
	
	returnVal.x *= xSize;
	returnVal.y *= ySize;
	returnVal.z *= zSize;
	
	return returnVal;
}