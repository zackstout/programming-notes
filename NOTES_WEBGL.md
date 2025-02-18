# WebGL Notes

## Vertex Shader

- Data is only computed for every vertex in the model.

### Model-View-Projection

- `gl_Position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * vec4(a_position, 1.0);`

### Passing Data to the Fragment Shader

- Use varying variables to pass interpolated data (e.g., color, texture coordinates) from the vertex shader to the fragment shader.

### Lighting

- Transform the normals into world or view space
- `v_normal = normalize(mat3(u_modelMatrix) * a_normal);`

### Displacement

- Example:

```
float wave = sin(a_position.x * frequency + u_time) * amplitude;
vec3 displacedPosition = a_position + vec3(0.0, wave, 0.0);
gl_Position = u_projectionMatrix * vec4(displacedPosition, 1.0);
```

## Fragment Shader

- Data is computed for every pixel on the screen.

### Texture Mapping

```
varying vec2 v_texCoord;
uniform sampler2D u_texture;

void main() {
    gl_FragColor = texture2D(u_texture, v_texCoord);
}
```

### Lighting

```
varying vec3 v_normal;
uniform vec3 u_lightDir; // Light direction

void main() {
    float intensity = max(dot(normalize(v_normal), normalize(u_lightDir)), 0.0);
    gl_FragColor = vec4(vec3(intensity), 1.0); // Grayscale based on light
}
```

#### Specular Highlights

```
vec3 lightDir = normalize(u_lightPos - v_fragPos);
vec3 viewDir = normalize(u_viewPos - v_fragPos);
vec3 reflectDir = reflect(-lightDir, v_normal);

float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
gl_FragColor.rgb += vec3(spec) * u_lightColor;
```

### Procedural Patterns

- Checkerboard:

```
float checker = mod(floor(v_texCoord.x * 8.0) + floor(v_texCoord.y * 8.0), 2.0);
gl_FragColor = vec4(vec3(checker), 1.0);
```

### Screen-space Effects

- Fog:

```
float fogFactor = exp(-gl_FragCoord.z * fogDensity);
vec3 fogColor = mix(fragColor, u_fogColor, fogFactor);
```

- Vignette:

```
vec2 iuv = fragCoord / iResolution.xy * 2.0 - 1.0;
float vgn = smoothstep(1.2,0.7,abs(iuv.y)) * smoothstep(1.1,0.8,abs(iuv.x));
color *= 1.0 - (1.0 - vgn) * 0.15;
```

### Post-processing

- Use a texture as a WebGLRenderTarget: "any 3d scene is just a texture that you can render into another shader"

## Standard Functions

### Mix

- Use as a stand-in for lerp

## Additional Resources

- Free online book with advanced techniques: https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models
- Shader fractals github: https://github.com/pedrotrschneider/shader-fractals
- Advanced noise: https://iquilezles.org/articles/morenoise/ (everything on his site is great)
- Art demos: https://www.vertexshaderart.com/

Could you describe some techniques commonly used when writing fragment and vertex shaders in WebGL with a focus on particle simulatiosn?

- Particles easy: https://www.youtube.com/watch?v=8K5wJeVgjrM&ab_channel=YuriArtiukh
- Particles hard (fbo): https://www.youtube.com/watch?v=CC__iJ8IIqc&ab_channel=YuriArtiukh
- Light rays (fbo): https://www.youtube.com/watch?v=o0M_QPkhNi4&ab_channel=YuriArtiukh
- Icosahedron (Composer, dot, refract, dfdx, barycentric): https://www.youtube.com/watch?v=dyvhB6UVxwE&ab_channel=YuriArtiukh

- Make template for easy particles
- Make template for hard particles (fbo) -- maybe classes?
