using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    [MaxLength(100)]
    public string Username { get; set; }= string.Empty;
    [Required]
    [MaxLength(100)]
    [StringLength(8, MinimumLength = 4)]
    public string Password { get; set; }=string.Empty;
}
