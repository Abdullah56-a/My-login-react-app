var builder = WebApplication.CreateBuilder(args);

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .WithOrigins(
                "http://localhost:5173",     // Vite default
                "https://localhost:5173",    // sometimes https
                "http://127.0.0.1:5173",     // another Vite variation
                "https://localhost:51332",
                "https://kind-pond-045d93300.2.azurestaticapps.net" // 👈 Azure Static Web App// IIS Express frontend
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()
    );
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

// ✅ Put CORS here (after HttpsRedirection, before Authorization)
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();

