async function getCurrentPosition() {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => resolve(success),
      error => reject(error),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  });
}

export async function getCurrentPositionOrUndefined() {
  try {
    return await getCurrentPosition();
  } catch {
    return undefined;
  }
}
