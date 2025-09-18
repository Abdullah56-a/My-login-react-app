using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        if (request.Email == "admin@test.com" && request.Password == "1234")
        {
            return Ok(new { message = "Login successful", token = "fake-jwt-token" });
        }
        return Unauthorized(new { message = "Invalid email or password" });
    }
}

public class LoginRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
}

