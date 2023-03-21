// Wait for the page to load before running the script
window.addEventListener("load", function() {

	// Create a new Three.js scene
	const scene = new THREE.Scene();

	// Create a new Three.js camera
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 5;

	// Create a new Three.js renderer
	const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg"), alpha: true});
	renderer.setClearColor(0x000000, 0);

	// Add some particles to the scene
	const particleCount = 5000;
	const particles = new THREE.Geometry();
	const particleMaterial = new THREE.PointsMaterial({
		color: 0xffffff,
		size: 0.05,
		map: new THREE.TextureLoader().load("https://i.imgur.com/wrXrKJb.png"),
		transparent: true
	});

	for (let i = 0; i < particleCount; i++) {
		const x = Math.random() * 20 - 10;
		const y = Math.random() * 20 - 10;
		const z = Math.random() * 20 - 10;
		const particle = new THREE.Vector3(x, y, z);
		particles.vertices.push(particle);
	}

	const particleSystem = new THREE.Points(particles, particleMaterial);
	scene.add(particleSystem);

	// Animate the particles
	function animateParticles() {
		particles.vertices.forEach(function(particle) {
			particle.x += Math.random() * 0.1 - 0.05;
			particle.y += Math.random() * 0.1 - 0.05;
			particle.z += Math.random() * 0.1 - 0.05;
		});
		particles.verticesNeedUpdate = true;
	}

	// Render the scene and animate the particles
	function render() {
		requestAnimationFrame(render);
		animateParticles();
		renderer.render(scene, camera);
	}

	render();

	// Handle pop-out sections on click
	const section1Btn = document.getElementById("section1-btn");
	const section2Btn = document.getElementById("section2-btn");
	const section3Btn = document.getElementById("section3-btn");

	const section1 = document.getElementById("section1");
	const section2 = document.getElementById("section2");
	const section3 = document.getElementById("section3");

	section1Btn.addEventListener("click", function() {
		section1.classList.toggle("open");
	});
	section2Btn.addEventListener("click", function() {
		section2.classList.toggle("open");
	});
	section3Btn.addEventListener("click", function() {
		section3.classList.toggle("open");
	});

});
