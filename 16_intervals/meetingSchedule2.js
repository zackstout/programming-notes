// Huh.... how many days minimum does it require to fit all meetings in....
// Or rooms, or whatever.
// I don't really have an intuition for why their solution works...
// Oh wait I kind of get it...
// As we move along... after sorting... we can count how many new starts we've encountered before seeing an end...
// For each one, we know we need to start a new room....

// Yeah, really we just need to track the max number of meetings that are happening "simultaneously".
// That makes sense.