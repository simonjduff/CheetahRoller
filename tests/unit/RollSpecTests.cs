using System.Threading.Tasks;
using CheetahRoller.Domain;
using CheetahTesting;
using Xunit;
using Unit.Steps;

namespace unit
{
    public class RollSpecTests
    {
        [Fact]
        public async Task Spec1d6()
        {
            await CTest<RollSpecContext>
                .Given(a => a.RollSpecInput("1d6"))
                .When(i => i.BuildRollSpec())
                .Then(i => i.SpecHasXDiceAtSizeY(1, 6))
                .ExecuteAsync();
        }

        [Fact]
        public async Task Spec5d6()
        {
            await CTest<RollSpecContext>
                .Given(a => a.RollSpecInput("5d6"))
                .When(i => i.BuildRollSpec())
                .Then(i => i.SpecHasXDiceAtSizeY(5, 6))
                .ExecuteAsync();
        }

        [Fact]
        public async Task Spec3d12()
        {
            await CTest<RollSpecContext>
                .Given(a => a.RollSpecInput("3d12"))
                .When(i => i.BuildRollSpec())
                .Then(i => i.SpecHasXDiceAtSizeY(3, 12))
                .ExecuteAsync();
        }

        public class RollSpecContext : IHasRollSpecInput,
            IHasRollSpec,
            IHasDiceCup
        {
            public string RollSpecInput { get; set; }
            public RollSpec RollSpec { get; set; }
            public DiceCup DiceCup { get; set; }
        }
    }

    public interface IHasRollSpecInput
    {
        string RollSpecInput { get; set; }
    }

    public interface IHasRollSpec
    {
        RollSpec RollSpec { get; set; }
    }

    public interface IHasDiceCup
    {
        DiceCup DiceCup { get; set; }
    }
}
