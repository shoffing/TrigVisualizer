function rotateVector(vec, axis, angle)
{
	var tempVec = new THREE.Vector3();
	tempVec.copy(vec);
	var matrix = new THREE.Matrix4().makeRotationAxis( axis, angle );
	return matrix.multiplyVector3( tempVec );
}

// Just to make code more readable
function nVec(x, y, z)
{
	return new THREE.Vector3(x, y, z);
}

// also to make code more readable
function sin(val) { return Math.sin(val); }
function cos(val) { return Math.cos(val); }
function sqrt(val) { return Math.sqrt(val); }
function abs(val) { return Math.abs(val); }

function round(val, decimalPlaces)
{
	return Math.round(val * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
}

function constrain(val, min, max)
{
	return Math.min(Math.max(val, min), max);
}

function dist2d(x1, y1, x2, y2)
{
	return Math.sqrt( Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) );
}

function dist3d(x1, y1, z1, x2, y2, z2)
{
	return Math.sqrt( Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2) );
}