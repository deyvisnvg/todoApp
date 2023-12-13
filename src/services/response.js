export function success(response) {
    return {
      ok: true,
      response,
    };
  }
  
  export function failed(error) {
    return {
      ok: false,
      error,
    };
  }